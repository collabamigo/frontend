
import {useRouter} from "next/router";
import React from "react";
import CreateEventModal from "components/CreateEventModal";

export default function FormBuilderPage() {
    const router = useRouter();
    return (
        <CreateEventModal
            router={router}
        />)
}
