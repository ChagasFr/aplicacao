import Linha from "@/components/layout/Linha";
import MenuItem from "@/components/template/MenuItem";
import Menu from "@/components/template/Menus";
import Pagina from "@/components/template/Pagina";
import { IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconComponents, IconDatabase, IconH1, IconNumber, IconNumbers, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"


export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem icone={<IconSourceCode />}
            url="/hora.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora (Estático)
          </MenuItem>

          <MenuItem icone={<IconSourceCode />}
            url="/horaAtual.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora com JS(Estático)
          </MenuItem>

          <MenuItem icone={<IconClock />}
            url="/api/hora"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora com JS(Dinamico)
          </MenuItem>

          <MenuItem icone={<IconTable />}
            url="/api/tabela?colunas=5&linhas=7"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Tabela
          </MenuItem>

          <MenuItem icone={<IconArrowsDiff />}
            url="/api/usuarios"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            API de Usuarios
          </MenuItem>

        </Linha>

        <Linha>
          <MenuItem icone={<IconComponents />}
            url="/examples/simples"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Componente Simples
          </MenuItem>

          <MenuItem icone={<IconH1 />}
            url="/examples/basico"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Componente Basico
          </MenuItem>

          <MenuItem icone={<IconClick />}
            url="/examples/evento"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Eventos
          </MenuItem>

          <MenuItem icone={<IconSitemap />}
            url="/examples/filhos"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Filhos
          </MenuItem>

          <MenuItem icone={<IconArrowMoveDown />}
            url="/examples/direta"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Comunicacao direta
          </MenuItem>

          <MenuItem icone={<IconArrowMoveUp />}
            url="/examples/indireta"
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Comunicacao Indireta
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem icone={<IconNumbers />}
            url="/examples/estado"
            className="bg-gradient-to-r from-blue-400 to-purple-600">
            Com Estado
          </MenuItem>

          <MenuItem icone={<IconDatabase />}
            url="/examples/contexto/"
            className="bg-gradient-to-r from-blue-400 to-purple-600">
            Contexto compartilhado
          </MenuItem>
        </Linha>

      </Menu>
    </Pagina>
  )
}
