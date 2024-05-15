import { useQuery, useQueryClient } from "@tanstack/react-query"

import * as Navigation from '../Sidebar/Navigation'

export function DocumentsView() {

    const queryClient = useQueryClient()

    const { data: documents = [] } = useQuery({
        queryKey: ['documents'], refetchInterval: 10, refetchOnWindowFocus: true, refetchOnReconnect: true, queryFn: async () => {
            const res = await window.api.getDocuments()

            console.log('feito do zero')

            queryClient.invalidateQueries(['documents'])


            console.log(res)

            return res
        }
    })

    console.log('bom dia:', documents)
    console.log(documents)

    console.log(documents)

    console.log(documents)


    return (
        <Navigation.Root>
            <Navigation.Section>
                <Navigation.SectionTitle>Workspace</Navigation.SectionTitle>
                <Navigation.SectionContent>
                    {documents?.map((document) => {
                        return <Navigation.Link key={document.id}>{document.title}</Navigation.Link>
                    })}
                </Navigation.SectionContent>
            </Navigation.Section>
        </Navigation.Root>

    )
}