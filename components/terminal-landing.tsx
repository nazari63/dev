'use client'

import { useScramble } from 'use-scramble'
import Link from 'next/link'

export default function TerminalLanding() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black text-white font-mono flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <ScrambleText
          text="We're updating the Internet with a new dev platform."
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed break-words block"
        />
        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-wrap">
            <span className="text-gray-400">
              <Link 
                href="https://base.dev" 
                target="_blank"
                className="hover:text-gray-300 transition-colors"
              >
                base.dev
              </Link>
              {' >'}
            </span>
            <span className="ml-2 animate-pulse">coming soon</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-sm text-gray-600">
            <Link 
              target="_blank"
              href="https://base.dev/blog" 
              className="hover:text-gray-400 transition-colors"
            >
              blog
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              target="_blank"
              href="https://base.org/careers" 
              className="hover:text-gray-400 transition-colors"
            >
              careers
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              target="_blank"
              href="https://x.com/base" 
              className="hover:text-gray-400 transition-colors"
            >
              x
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const { ref } = useScramble({
    text,
    speed: 0.8,
    tick: 1,
    step: 1,
    scramble: 3,
    seed: 3,
  });

  return (
    <span className={className}>
      <span ref={ref} />
      <span className="inline-block w-[2px] h-[1em] translate-y-[2px] bg-[#0052ff] animate-cursor" />
    </span>
  );
};

