// components/TypingEffect.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

type Token = { type: 'text'; content: string } | { type: 'tag'; content: string };

// Função para tokenizar uma frase
function parsePhrase(phrase: string): Token[] {
  const tokens: Token[] = [];
  const regex = /(<[^>]*>)|([^<]+)/g;
  let match;

  while ((match = regex.exec(phrase)) !== null) {
    if (match[1]) {
      // Tag HTML
      tokens.push({ type: 'tag', content: match[1] });
    } else if (match[2]) {
      // Texto - dividimos em caracteres
      const chars = match[2].split('');
      for (const char of chars) {
        tokens.push({ type: 'text', content: char });
      }
    }
  }

  return tokens;
}

export default function TypingEffect() {
  const t = useTranslations("Homepage");
  // Acessamos as frases do arquivo de mensagens
  const phrases: string[] = t.raw('typingPhrases');

  // Tokenizamos todas as frases antecipadamente
  const tokenizedPhrases = phrases.map(parsePhrase);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedTokens, setDisplayedTokens] = useState<Token[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [tokenIndex, setTokenIndex] = useState(0);

  useEffect(() => {
    const tokens = tokenizedPhrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;
    const typingSpeed = 16.1803398875;    // Velocidade de digitação (ms)
    const deletingSpeed = 16.1803398875;   // Velocidade de deleção (ms)
    const pauseTime = 1618.03398875;     // Pausa após completar a frase (ms)

    if (!isDeleting && tokenIndex <= tokens.length) {
      // Digitação
      if (tokenIndex < tokens.length) {
        const token = tokens[tokenIndex];
        timeout = setTimeout(() => {
          setDisplayedTokens((prev) => [...prev, token]);
          setTokenIndex(tokenIndex + 1);
        }, token.type === 'tag' ? 0 : typingSpeed);
      } else {
        // Pausa após completar a frase
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTokenIndex(tokenIndex - 1);
        }, pauseTime);
      }
    } else if (isDeleting && tokenIndex >= 0) {
      // Deleção
      timeout = setTimeout(() => {
        setDisplayedTokens((prev) => prev.slice(0, -1));
        setTokenIndex(tokenIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && tokenIndex < 0) {
      // Passa para a próxima frase
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % tokenizedPhrases.length);
      setTokenIndex(0);
      setDisplayedTokens([]);
    }

    return () => clearTimeout(timeout);
  }, [tokenIndex, isDeleting, currentPhraseIndex, tokenizedPhrases]);

  // Monta o displayedText a partir dos tokens
  const displayedText = displayedTokens.map(token => token.content).join('');

  return (
    <div className="text-base font-extralight text-zinc-50 font-supplymono">
      {displayedText}
      <span className="animate-ping duration-300 text-zinc-50">_</span>
    </div>
  );
}
