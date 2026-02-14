import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const Guestbook = () => {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // 메시지 불러오기
  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMessages(data || [])
    } catch (err) {
      console.error('Error fetching messages:', err)
      // Supabase 설정이 안 되어 있을 경우 에러 무시
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  // 메시지 작성
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name.trim() || !message.trim()) {
      setError('이름과 메시지를 모두 입력해주세요.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: name.trim(), message: message.trim() }])

      if (error) throw error

      setName('')
      setMessage('')
      fetchMessages()
    } catch (err) {
      console.error('Error submitting message:', err)
      setError('메시지 등록에 실패했습니다. Supabase 설정을 확인해주세요.')
    } finally {
      setLoading(false)
    }
  }

  // 메시지 삭제
  const handleDelete = async (id) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const { error } = await supabase
        .from('guestbook')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchMessages()
    } catch (err) {
      console.error('Error deleting message:', err)
      alert('삭제에 실패했습니다.')
    }
  }

  return (
    <section className="section-container">
      <div className="card-wrapper p-6" data-aos="fade-up"
        data-aos-delay="100">
        <h2 className="section-title">축하 메시지</h2>

        {/* 메시지 작성 폼 */}
        <div className="mb-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                maxLength={20}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="축하 메시지를 남겨주세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                maxLength={200}
              />
              <p className="text-xs text-gray-500 mt-1 text-right">
                {message.length}/200
              </p>
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-secondary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
            >
              {loading ? '등록 중...' : '메시지 남기기'}
            </button>
          </form>
        </div>

        {/* 메시지 목록 */}
        <div className="space-y-3">
          {messages.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-sm">
                첫 번째 축하 메시지를 남겨주세요 💝
              </p>
              <p className="text-xs text-gray-400 mt-1">
                (Supabase 설정 후 메시지가 표시됩니다)
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-gray-50 p-4 rounded-xl border border-gray-100"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">{msg.name}</h4>
                    <p className="text-xs text-gray-500">
                      {new Date(msg.created_at).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    삭제
                  </button>
                </div>
                <p className="text-gray-700 text-sm whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Guestbook

