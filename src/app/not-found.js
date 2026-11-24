import StatusPage from "./components/ui/StatusPage"


export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}



export default function NotFound() {
  return (
    <StatusPage code="404" title="Page" highlight="Not Found">
      This page may have been removed, renamed, or is temporarily unavailable. Please use the button below to visit our homepage
      and find what you&apos;re looking for.
    </StatusPage>
  )
}
