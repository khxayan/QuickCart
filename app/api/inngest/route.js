import { serve } from "inngest/next";
import { inngest, syncUser, updateUser, deleteUser } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUser,
        updateUser,
        deleteUser
    ],
});