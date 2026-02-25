import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthStatus } from "@/components/auth-status"
import { GoAPITest } from "@/components/go-api-test"

export default async function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Authly</h1>
            <p className="text-zinc-400 text-lg">
              JWT authentication with Better Auth and Go
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AuthStatus />
            <GoAPITest />
          </div>

          <div className="mt-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">How It Works</CardTitle>
                <CardDescription className="text-zinc-400">
                  Authentication flow across services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-sm font-mono text-zinc-500 mb-1">1</div>
                    <h3 className="font-semibold text-white">Sign Up</h3>
                    <p className="text-zinc-400 text-sm">Create an account with email and password</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono text-zinc-500 mb-1">2</div>
                    <h3 className="font-semibold text-white">Get JWT</h3>
                    <p className="text-zinc-400 text-sm">Better Auth issues a signed JWT token</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-mono text-zinc-500 mb-1">3</div>
                    <h3 className="font-semibold text-white">Verify</h3>
                    <p className="text-zinc-400 text-sm">Go API validates the token via JWKS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
