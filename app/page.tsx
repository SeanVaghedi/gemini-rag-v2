import { ChatForm } from "@/components/chat-form"
import { DocumentUploader } from "@/components/document-uploader"
import { DocumentList } from "@/components/document-list"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4 border-r">
        <div className="space-y-4">
          <DocumentUploader />
          <DocumentList />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <ChatForm />
      </div>
    </div>
  )
}
