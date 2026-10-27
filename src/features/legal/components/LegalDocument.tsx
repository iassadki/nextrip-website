import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import type { LegalBlock, LegalDocumentContent, LegalSection } from '@/data/legal/types'
import styles from './LegalDocument.module.css'

/** Renders a structured legal document with a sticky table of contents on wide screens. */
export function LegalDocument({ content }: { content: LegalDocumentContent }) {
  return (
    <article className={styles.page}>
      <Container className={styles.layout}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          {content.updatedAt ? <p className={styles.updated}>Dernière mise à jour : {content.updatedAt}</p> : null}
        </header>

        <nav aria-label="Sommaire" className={styles.toc}>
          <p className={styles.tocTitle}>Sommaire</p>
          <ol>
            {content.sections.map((section) => (
              <li key={section.id}>
                <Link to={`#${section.id}`}>{section.title}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.body}>
          {content.sections.map((section) => (
            <Section key={section.id} section={section} level={2} />
          ))}
        </div>
      </Container>
    </article>
  )
}

function Section({ section, level }: { section: LegalSection; level: 2 | 3 }) {
  const Heading = level === 2 ? 'h2' : 'h3'

  return (
    <section id={section.id} className={level === 2 ? styles.section : styles.subsection}>
      <Heading className={level === 2 ? styles.sectionTitle : styles.subsectionTitle}>{section.title}</Heading>
      {section.blocks?.map((block, index) => <Block key={index} block={block} />)}
      {section.subsections?.map((subsection) => (
        <Section key={subsection.id} section={subsection} level={3} />
      ))}
    </section>
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={styles.paragraph}>
          {block.text}
          {block.link ? (
            <>
              {' '}
              <Link to={block.link.to}>{block.link.label}</Link>.
            </>
          ) : null}
        </p>
      )
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'details':
      return (
        <dl className={styles.details}>
          {block.items.map((item) => (
            <div key={item.label} className={styles.detailRow}>
              <dt>{item.label}</dt>
              <dd>{item.href ? <a href={item.href}>{item.value}</a> : item.value}</dd>
            </div>
          ))}
        </dl>
      )
  }
}
