import { PostPropertyForm } from "@/components/post-property-form";
import { Header } from "@/components/header";

export default function PostProperty() {
  return (
    <div className="min-h-screen">
      <main className="bg-gray-50 py-8">
        <PostPropertyForm />
      </main>
    </div>
  );
}
