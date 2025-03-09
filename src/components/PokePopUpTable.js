import '../styles/pokepopuptable.css';
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import PokePopUpTableData from "./PokePopUpTableData";

export default function PokePopUpTable({data}) {

    return  <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className = 'popuptablecell'>
                            Pokémon Statistics
                        </TableCell>
                        <TableCell>
                        </TableCell>
                    </TableRow>   
                </TableHead>

                <TableBody>
                    <PokePopUpTableData data = {data} />
                </TableBody>
            </Table>
}