import React, { useState } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { FetchNews } from '../actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';
import { Button, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  form: {
    display:'flex',
    color:'#303F9F'
  },
  select: {
      color:'#303F9F',
    marginRight: '2rem'
  },
}));

// Options
const CountryOptions = [
    {
      label: "Select Any Country",
      value: " ",
    },
    {
      label: "United Arab Emirates",
      value: "ae",
    },
    {
      label: "Argentina",
      value: "ar",
    },
    {
      label: "Austria",
      value: "at",
    },
    {
      label: "Australia",
      value: "au",
    },
    {
      label: "Belgium",
      value: "be",
    },
    {
      label: "Bulgaria",
      value: "bg",
    },
    {
      label: "Brazil",
      value: "ba",
    },
    {
      label: "Canada",
      value: "ca",
    },
    {
      label: "Switzerland",
      value: "ch",
    },
    {
      label: "China",
      value: "cn",
    },
    {
      label: "Colombia",
      value: "co",
    },
    {
      label: "Czech Republic",
      value: "cz",
    },
    {
      label: "Germany",
      value: "de",
    },
    {
      label: "Egypt",
      value: "eg",
    },
    {
      label: "Greece",
      value: "gr",
    },
    {
      label: "Hungary",
      value: "hu",
    },
    {
      label: "Ireland",
      value: "ie",
    },
    {
      label: "Indonasia",
      value: "id",
    },
    {
      label: "India",
      value: "in",
    },
    {
      label: "Italy",
      value: "it",
    },
    {
      label: "Japan",
      value: "jp",
    },
    {
      label: "Kenya",
      value: "ke",
    },
    {
      label: "Liberia",
      value: "lr",
    },
    {
      label: "Malaysia",
      value: "my",
    },
    {
      label: "Mexico",
      value: "mx",
    },
    {
      label: "Nepal",
      value: "np",
    },
    {
      label: "New Zealand",
      value: "nz",
    },
    {
      label: "Pakistan",
      value: "pk",
    },
    {
      label: "Russia",
      value: "ru",
    },
    {
      label: "United Kingdom",
      value: "uk",
    },
    {
      label: "United States",
      value: "us",
    },
    {
      label: "Vietnam",
      value: "vn",
    },
    {
      label: "Zambia",
      value: "zm",
    },
    {
      label: "Zimbabwe",
      value: "zw",
    },
  ];

const CategoryOptions = [
    {
      label: "Select Any Category",
      value: " ",
    },
    {
      label: "business",
      value: "business",
    },
    {
      label: "entertainment",
      value: "entertainment",
    },
    {
      label: "general",
      value: "general",
    },
    {
      label: "health",
      value: "health",
    },
    {
      label: "science",
      value: "science",
    },
    {
      label: "sports",
      value: "sports",
    },
    {
      label: "technology",
      value: "technology",
    },
  ];

function SearchBox(props) {
  const classes = useStyles();
  var [country, setCountry] = useState(' ')
  var [category, setCategory] = useState(' ')

  const onSubmithandle = (e) => {
    e.preventDefault();

    // Action Calls
    props.FetchNews(country, category);
  }

  return (
    <>
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Top-Headlines
          </Typography>
          <form className={classes.form} onSubmit={onSubmithandle}>

                {/* country */}
                <Select className={classes.select} id="select" value={country}
                onChange={(e) => setCountry(e.target.value)}
                >
                    {CountryOptions.map((option, i) => (
                        <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>

                {/* category */}
                <Select className={classes.select} id="select" value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                    {CategoryOptions.map((option, i) => (
                        <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Toolbar>
      </AppBar>
    </div>

    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ FetchNews }, dispatch);
};
export default connect(null,mapDispatchToProps)(SearchBox);