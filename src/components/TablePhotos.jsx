import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhotoAlbum from './PhotoAlbum';

const useStyles = makeStyles({
  tableConteiner: {
    width: 'fit-content',
    margin: "0 auto"
  },
  table: {
    width: 'auto',
  },
  photoAlbum: {
    maxWidth: 150,
  },
  photoAlbumImg: {
    objectFit: 'cover',
    width: '100%'
  }
});

const TablePhotos = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableConteiner} size='small' elevation={10} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Photo</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">
                <PhotoAlbum
                  img={row.thumbnailUrl}
                  titel={row.titel}
                />
              </TableCell>
              <TableCell align="left">
                {row.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePhotos