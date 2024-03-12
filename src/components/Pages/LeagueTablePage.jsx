import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

const points = (gg, ge) => {
  return gg * 3 + ge * 1;
}

const difGoals = (gf, gc) => {
  return gf - gc;
}

export const LeagueTablePage = () => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://run.mocky.io/v3/518ea604-eaea-462d-b782-9285bc525192';
      const options = {
        method: 'GET',
        headers: {
          'API-Key': '14c61508813e4b099513f2626b75095',
        }
      };

      const resp = await fetch(url, options);
      const data = await resp.json();
      console.log(data);
      setNewData(data.equipos); 
    }

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="tabla liga de fútbol">
        <TableHead>
          <TableRow>
            <TableCell>Equipo</TableCell>
            <TableCell align="right">GJ</TableCell>
            <TableCell align="right">GG</TableCell>
            <TableCell align="right">GE</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">GF</TableCell>
            <TableCell align="right">GC</TableCell>
            <TableCell align="right">DIF</TableCell>
            <TableCell align="right">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.PJ}</TableCell>
              <TableCell align="right">{row.PG}</TableCell>
              <TableCell align="right">{row.PE}</TableCell>
              <TableCell align="right">{row.PP}</TableCell>
              <TableCell align="right">{row.GF}</TableCell>
              <TableCell align="right">{row.GC}</TableCell>
              <TableCell align="right"
                style={{ color: difGoals(row.GF, row.GC) > 0 ? 'green' : 'red' }}
              >
                {difGoals(row.GF, row.GC)}
              </TableCell>
              <TableCell align="right">{points(row.PG, row.PE)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
