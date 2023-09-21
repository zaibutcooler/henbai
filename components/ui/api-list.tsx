"use client"

import { useParams } from "next/navigation"

import { useOrigin } from "@/hooks/useOrigin"
import { ApiCopy } from "@/components/ui/api-copy"

interface ApiListProps {
  entityName: string
  entityIdName: string
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams()
  const origin = useOrigin()

  const baseUrl = `${origin}/api/admin/${params.storeID}`

  return (
    <>
      <ApiCopy
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiCopy
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiCopy
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiCopy
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiCopy
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  )
}
