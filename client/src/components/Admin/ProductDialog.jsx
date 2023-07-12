import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './ProductDialog.css'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';
import api from '../../services/api';

function BannerDialog({ open, setOpen, banner, setBanner }) {
  const [banners, setBanners] = useState([]);
  const [bannerUrl, setBannerUrl] = useState("")

  const addBanner = async () => {
    try {
      await api.createBanner({ 'url_banner': bannerUrl });
      setBannerUrl("")
    }
    catch (error) {
      alert(error)
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/v1/banners/all');
        setBanners(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open]);


  return (
    <div style={{ width: '100%', margin: 0 }}>
      <Button variant="text" onClick={handleClickOpen} sx={{ width: '100%' }}>
        BANNER
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className="title-area">
          <p>Por favor, escolha um banner apropriado para o livro abaixo</p>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </div>

        <div className="title-area book-name">
          <TextField
            value={bannerUrl}
            onChange={(event) => setBannerUrl(event.target.value)}
            placeholder="Insira a URL de uma imagem para adicionar"
            fullWidth
            autoComplete="new-password"
            type="text"
            inputProps={{ style: { textTransform: "uppercase" } }}
            sx={{
              "& fieldset": { border: "none" },
            }}
          />
          <Button disabled={bannerUrl === ""} onClick={addBanner}>
            ADICIONAR
          </Button>

        </div>
        <DialogContent>
          <Carousel
            autoHeight={true}
            infiniteLoop
            className="carousel-admin"
            useKeyboardArrows={true}
            showStatus={false}
            showThumbs={false}
          >
            {banners.map((bannerItem, index) => (

              <div onClick={() => setBanner(bannerItem.cod_banner)}
                className={`slide-image ${bannerItem.cod_banner === banner ? "current" : ""
                  }`}
                key={bannerItem.cod_banner}
                style={
                  bannerItem.cod_banner === banner
                    ? { backgroundColor: 'green' }
                    : { backgroundColor: 'red' }
                }
              >
                <img src={bannerItem.url_banner} key={index} />
              </div>
            ))}
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProductSynopsis({ synopsis, setSynopsis }) {
  const handleSynopsisChange = (event) => {
    setSynopsis(event.target.value);
  };
  return (
    <>
      <div className='product-synopsis'>
        <label>Sinopse</label>
        <input
          className='inputSinopse'
          value={synopsis}
          onChange={handleSynopsisChange}
        />
      </div>
    </>
  );
}

function ProductImage({ urlCover, setUrlCover }) {
  return (
    <>
      <div className='product-image'>
        <div className='insert-area'>
          <input
            onChange={(event) => setUrlCover(event.target.value)}
            value={urlCover} placeholder=''></input>
        </div>
        <img src={urlCover} alt='Insira uma URL válida' style={{ color: '#BEB8B8' }}></img>
      </div>
    </>
  )
}

function ProductForm({ book, setBook, genres, authors }) {

  const [openBannerDialog, setOpenBannerDialog] = useState(false);

  const handleChange = (event, key, isNumber) => {
    const { value, type } = event.target;
    let newValue;
    if (isNumber) {
      newValue = value === '' ? null : parseFloat(value);

    } else {
      newValue = value
    }

    setBook(prevBook => ({ ...prevBook, [key]: newValue }));
    console.log(book)
  };
  return (
    <>
      <div className='product-form correct'>
        <div className='linha cima'>
          <label>Autor</label>
          <select
            className='authorsSelect'
            value={book.autor ?? ''}
            onChange={(event) => handleChange(event, 'autor', true)}>
            <option
              value=''>Selecione o autor
            </option>
            {authors.map(author => (
              <option
                key={author.cod_autor}
                value={author.cod_autor}>
                {author.nome}
              </option>
            ))}
          </select>
        </div>

        <div className='linha '>
          <label>Editora</label>
          <p>LEW COMICS</p>
        </div>

        <div className='linha '>
          <label>Páginas</label>
          <input
            type='number'
            min={0}
            className='paginas'
            onChange={(event) => handleChange(event, 'paginas', true)}
            value={book.paginas} />
        </div>

        <div className='linha '>
          <label>Unidades</label>
          <input
            type='number'
            min={0}
            onChange={(event) => handleChange(event, 'quantidade', true)}
            value={book.quantidade} />
        </div>

        <div className='linha '>
          <label>Preço Un.</label>
          <input
            min={0}
            value={book.preco_unit}
            onChange={(event) => handleChange(event, 'preco_unit', false)}
          />
        </div>

        <div className='linha '>
          <BannerDialog
            open={openBannerDialog}
            banner={book.banner}
            setBanner={value => setBook(prevBook => ({ ...prevBook, 'banner': value }))}
            setOpen={setOpenBannerDialog}>
          </BannerDialog>
        </div>

        <div className='linha baixo '>
          <label>Gêneros</label>
          <select
            value={book.genero ?? ''}
            onChange={(event) => handleChange(event, 'genero', true)}>
            <option
              value=''>Selecione o gênero
            </option>
            {genres.map(genre => (
              <option
                key={genre.cod_genero}
                value={genre.cod_genero}>
                {genre.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}


const useStyles = makeStyles({
  customDialog: {
    '& .MuiPaper-rounded': {
      borderRadius: '0',
    },
  },
});

export default function ProductDialog({ open, setOpen, book, setBook, httpMethod, setHttpMethod }) {
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  const [books, setBooks] = useState([]);
  const [dupBook, setDupBook] = useState(false);

  const isBookNameDuplicated = (name) => {
    if (httpMethod === "create") {
      const normalizedNames = books.map((obj) => normalizeString(obj.nome));
      const newName = normalizeString(name);
      const isDuplicated = normalizedNames.includes(newName);
      setDupBook(isDuplicated);
    }
  };

  // Helper function to normalize strings by removing spaces and converting to lowercase
  const normalizeString = (str) => {
    return str.toLowerCase().replace(/\s/g, '');
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [authorsResp, gendersResp, booksResp] = await Promise.all([
          api.getAllAuthors(),
          api.getAllGenres(), api.getAllBooks()
        ]);
        setAuthors(authorsResp.data.result);
        setGenres(gendersResp.data.result);
        setBooks(booksResp.data.result);
        setDupBook(false)

      } catch (error) {
        console.log(error);
      }
    };

    if (open) {
      fetchData();
    }
  }, [open]);


  const classes = useStyles();

  const handleClickOpen = async () => {
    try {
      const booksResp = await api.getAllBooks();
      const lastListValue = booksResp.data.result.length - 1;
      const id = booksResp.data.result[lastListValue]['cod_manga'] + 1;

      setBook({
        'autor': null,
        'banner': null,
        'cod_manga': id,
        'genero': null,
        'nome': null,
        'paginas': null,
        'preco_unit': null,
        'quantidade': null,
        'url_capa': null
      })
      setHttpMethod('create')
      setOpen(true);
    }
    catch (error) {
      alert(error)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = async () => {
    const confirmed = window.confirm(`Tem certeza que deseja excluir o livro '${book.nome}'?`);
    if (!confirmed) {
      return;
    }
    try {
      await api.deleteBookById(book.cod_manga)
    } catch (error) {
      alert(error)
    }

    handleClose();
  }
  const handleCloseModify = async () => {
    try {

      const valuesValid = Object.values(book).every(value => value !== null && value !== '');
      if (!valuesValid) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const confirmed = window.confirm('Deseja salvar as modificações feitas para o livro atual?');
      if (!confirmed) {
        return;
      }

      if (httpMethod === 'create') {
        await api.createBook(book);
      } else if (httpMethod === 'update') {
        await api.updateBookById(book.cod_manga, book);
      } else {
        throw new Error(`Invalid httpMethod '${httpMethod}'`);
      }
    } catch (error) {
      alert(error);
    }
    handleClose();
  };


  return (
    <div className='buttonArea'>
      <button onClick={handleClickOpen} className='add-button'>
        ADICIONAR
      </button>
      <Dialog open={open} onClose={handleClose} className={classes.customDialog}>
        <div className='title-area'>
          <DialogTitle>
            {book.cod_manga !== null && `ID${book.cod_manga.toString().padStart(3, '0')}`}
          </DialogTitle>

          <div className='book-name'>
            <TextField
              error={dupBook}
              helperText={dupBook && "Livro duplicado"}
              placeholder='nome do livro'
              fullWidth
              autoComplete='new-password'
              type='text'
              onChange={(event) => {
                isBookNameDuplicated(event.target.value)
                setBook({ ...book, nome: event.target.value })
              }
              }
              value={book.nome !== null ? book.nome : ''}
              inputProps={{ style: { textTransform: "uppercase" } }}
              sx={{
                "& fieldset": { border: 'none' },
              }} />
          </div>
          <Button onClick={handleClose}
          ><CloseIcon ></CloseIcon>
          </Button>
        </div>
        <DialogContent>
          <div style={{ display: 'flex' }}>
            {open && <ProductImage
              urlCover={book.url_capa}
              setUrlCover={value => setBook(prevBook => ({ ...prevBook, 'url_capa': value }))}
            />
            }
            {open && <ProductForm
              authors={authors}
              genres={genres}
              book={book}
              setBook={setBook}
            />
            }
          </div>

          <ProductSynopsis
            synopsis={book.sinopse}
            setSynopsis={value => setBook(prevBook => ({ ...prevBook, 'sinopse': value }))}
          />

        </DialogContent>
        <DialogActions>
          <div className='buttonsConfirm'>
            <Button
              className='buttonGreen'
              onClick={handleCloseModify}>Salvar</Button>
            <Button
              className='buttonRed' disabled={httpMethod === 'create'}
              onClick={handleCloseDelete}>Excluir</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}