import Formulario from "@/components/examples/estado/Formulario";
import Minimo from "@/components/examples/estado/minimo";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function PaginaEstado() {
    return (
        <Pagina>
            <div className="flex flex-col items-center gap-10">
                <Minimo />
                <Formulario />
            </div>
        </Pagina>
    )
}