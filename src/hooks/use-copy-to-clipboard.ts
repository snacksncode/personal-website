import { useCallback, useState } from 'react';

/**
 * The copied text as `string` or `null` if nothing has been copied yet.
 */
type CopiedValue = string | null;

/**
 * Function to copy text to the clipboard.
 * @param text - The text to copy to the clipboard.
 * @returns A promise that resolves to `true` if the text was copied successfully, or `false` otherwise.
 */
type CopyFn = (text: string) => Promise<boolean>;

/**
 * Copies text with the Clipboard API.
 * Source: usehooks-ts/useCopyToClipboard at commit 6194913.
 */
export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}
