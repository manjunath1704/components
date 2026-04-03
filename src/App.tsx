import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Shadcn + Tailwind v4
        </p>
        <h1 className="text-3xl font-semibold">Components playground</h1>
        <p className="text-sm text-muted-foreground">
          Start building components and preview them in Storybook.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button>Get started</Button>
          <Button variant="secondary">View stories</Button>
        </div>
      </div>
    </main>
  )
}

export default App
