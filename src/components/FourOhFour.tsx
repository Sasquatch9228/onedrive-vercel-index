import Image from 'next/image'
import { Trans } from 'next-i18next'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image src="/images/bigfoot-angry.png" alt="404" width={812} height={812} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          <Trans>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Oops, that's a <span className="underline decoration-red-500 decoration-wavy">four-oh-four</span>. How did you even get here?
          </Trans>
        </div>
        <div className="mb-4 overflow-hidden break-all rounded border border-gray-400/20 bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
          {errorMsg}
        </div>
        <div className="text-sm">
          <Trans>
            Press{' '}
            <kbd className="rounded border border-gray-400/20 bg-gray-100 px-1 font-mono text-xs dark:bg-gray-800">
              F12
            </kbd>{' '}
            and open the developer tools for more details, or seek help by emailing me at{' '}
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline"
              href="mailto:vasquezlister288@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vasquezlister288@gmail.com
            </a>
            .
          </Trans>
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
