# Tokenizer

A tokenizer is the encoding/decoding scheme (algorithm plus vocabulary and special tokens) that converts raw text into token IDs and converts token IDs back into text for an [LLM](./llm.md).

Tokenizers define what counts as a [token](./token.md), which affects how [context size](./context-size.md) is measured, how text is represented during [training](./training.md) (including [pretraining](./pretraining.md)), and how outputs from [inference](./inference.md) are turned back into strings. Different models can use different tokenization schemes (e.g., BPE, WordPiece, unigram; byte-level vs Unicode-aware).

## Examples

- Byte-pair encoding (BPE) tokenizers that split words into common subword pieces.
- Special tokens used to separate chat messages or indicate end-of-sequence.

## Synonyms

tokenization, text encoder (overlapping)
