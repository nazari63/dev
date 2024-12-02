'use client'

import { useScramble } from 'use-scramble'
import Link from 'next/link'
import { CommandPalette } from './CommandPalette'
import { useState } from 'react'

export default function TerminalLanding() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden bg-black text-white font-mono flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="mb-4 font-mono">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <span>$</span>
              <div className="relative">
                <button 
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText('npm create onchain');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-gray-400 hover:text-gray-300 cursor-copy group"
                >
                  npm create onchain
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? 'Copied!' : 'Copy'}
                  </span>
                </button>
              </div>
              <span className="inline-block w-[2px] h-[1em] translate-y-[1px] bg-[#0052ff] animate-cursor" />
            </div>
          </div>
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
        <div className="absolute bottom-4 text-gray-400 font-mono text-md opacity-80">
          <kbd className="font-mono">⌘</kbd> + <kbd className="font-mono">i</kbd>
        </div>
      </div>
      <CommandPalette />
    </>
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

