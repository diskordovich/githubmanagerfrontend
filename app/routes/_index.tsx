import ProtectedRouteWrapper from "~/features/auth/components/ProtectedRouteWrapper"
import RepositoriesOverview from "~/features/github/pages/RepositoriesOverview"

export default function LoginRoute() {
    return (
        <ProtectedRouteWrapper>
            <RepositoriesOverview />
        </ProtectedRouteWrapper>
    )
}