/** Structured legal text, rendered by <LegalDocument />. */
export type LegalBlock =
  /** `link` is an internal route appended after the text. */
  | { type: 'paragraph'; text: string; link?: { label: string; to: string } }
  | { type: 'list'; items: string[] }
  /** Label/value pairs such as "Adresse : …". */
  | { type: 'details'; items: Array<{ label: string; value: string; href?: string }> }

export interface LegalSection {
  id: string
  title: string
  blocks?: LegalBlock[]
  subsections?: LegalSection[]
}

export interface LegalDocumentContent {
  title: string
  updatedAt?: string
  intro?: string
  sections: LegalSection[]
}
