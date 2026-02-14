import { useState } from 'react'

const AccountInfo = () => {
  const [copiedKey, setCopiedKey] = useState(null)
  const [groomOpen, setGroomOpen] = useState(false)
  const [brideOpen, setBrideOpen] = useState(false)

  // 신랑측: 신랑 아버지, 신랑 어머니, 신랑
  const groomAccounts = [
    { label: '신랑 아버지', name: '엄민호', bank: '우리은행', accountNumber: '077-269571-02-001' },
    { label: '신랑 어머니', name: '김인자', bank: '농협은행', accountNumber: '211074-52-337407' },
    { label: '신랑', name: '엄태성', bank: '신한은행', accountNumber: '110-494-468967' },
  ]

  // 신부측: 신부 아버지, 신부 어머니, 신부
  const brideAccounts = [
    { label: '신부 아버지', name: '서훈', bank: '국민은행', accountNumber: '123-456-789012' },
    { label: '신부 어머니', name: '박진희', bank: '신한은행', accountNumber: '110-123-456789' },
    { label: '신부', name: '서지연', bank: '우리은행', accountNumber: '1002-123-456789' },
  ]

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    } catch (err) {
      alert('복사에 실패했습니다.')
    }
  }

  const AccountCard = ({ account, copyKey }) => {
    const fullText = `${account.bank} ${account.accountNumber} (${account.name})`
    return (
      <div className="bg-white rounded-xl p-4 border border-gray-100 mb-3 last:mb-0">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <p className="text-xs text-gray-500 font-medium">{account.label}</p>
            <p className="text-gray-800 font-medium mt-0.5">{account.name}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard(fullText, copyKey)
            }}
            className="shrink-0 p-2 text-gray-500 hover:text-primary transition-colors"
            aria-label="계좌번호 복사"
          >
            {copiedKey === copyKey ? (
              <span className="text-green-600 text-sm">✓</span>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-700">{account.bank} {account.accountNumber}</p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            copyToClipboard(fullText, copyKey)
          }}
          className="w-full mt-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
        >
          {copiedKey === copyKey ? '복사되었습니다' : '계좌번호 복사'}
        </button>
      </div>
    )
  }

  const ToggleSection = ({ title, isOpen, onToggle, accounts, prefix }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3 last:mb-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-medium text-gray-800">{title}에게</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-[#f8faf8] border-t border-gray-100">
          {accounts.map((acc, i) => (
            <AccountCard key={i} account={acc} copyKey={`${prefix}-${i}`} />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <section className="section-container">
      <div className="card-wrapper p-6" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-title !mb-4">마음 전하실 곳</h2>

        <p className="text-center text-gray-600 text-sm mb-6 leading-relaxed">
          참석이 어려우신 분들을 위해 기재했습니다.<br />
          너그러운 마음으로 양해 부탁드립니다.
        </p>

        <ToggleSection
          title="신랑측"
          isOpen={groomOpen}
          onToggle={() => setGroomOpen(!groomOpen)}
          accounts={groomAccounts}
          prefix="groom"
        />
        <ToggleSection
          title="신부측"
          isOpen={brideOpen}
          onToggle={() => setBrideOpen(!brideOpen)}
          accounts={brideAccounts}
          prefix="bride"
        />
      </div>
    </section>
  )
}

export default AccountInfo
