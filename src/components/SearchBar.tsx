import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from '@mui/material';
import { PAGE_DESCRIPTIONS, PAGE_NAMES } from '../data/page';

interface PageDescriptionCard {
  title: string;
  path: string;
  description: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [pageDescriptionCards] =
    useState<PageDescriptionCard[]>(PAGE_DESCRIPTIONS);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (PAGE_NAMES.includes(query.toLowerCase())) {
      navigate(`/${query}`);
    } else {
      alert('Page not found');
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (PAGE_NAMES.includes(query.toLowerCase())) {
      navigate(`/${query}`);
    } else {
      alert('Page not found');
    }
  };

  return (
    <Container style={{ height: '100vh' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        style={{ height: '100%', paddingTop: '2rem' }}
      >
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            alignItems="center"
          >
            <TextField
              label="Search"
              variant="outlined"
              type="text"
              value={query}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Divider orientation="vertical" flexItem />
                    <IconButton edge="end" onClick={(e) => handleNavClick(e)}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {pageDescriptionCards.map((pageDescription, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardActionArea
                onClick={() => navigate(`/${pageDescription.path}`)}
              >
                <CardContent>
                  <Typography variant="h5">{pageDescription.title}</Typography>
                  <Typography variant="body1" component="div">
                    {pageDescription.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Container>
  );
};

export default SearchBar;
