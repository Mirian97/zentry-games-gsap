import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main>
      <h1 className="text-4xl font-bold font-circular-web text-violet-300">
        Welcome to the anime landing page
      </h1>
    </main>
  )
}
