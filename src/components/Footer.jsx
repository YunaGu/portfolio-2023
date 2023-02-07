import { Container } from '@/components/Container'


export function Footer() {
  return (
    <footer>
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
              <p className="text-sm text-right text-zinc-400 dark:text-zinc-500">
                Designed and developed with ❤️ by Yun @ {new Date().getFullYear()} 
              </p>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
