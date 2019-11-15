import axios from 'axios';

import {
  GET_TABLE_POINTS,
  GET_FIXTURES,
  GET_TEAMS,
  GET_SLIDER,
  GET_HIGHLIGHTED_NEWS,
  GET_TEAMS_COUNT,GET_PLAYERS_COUNT,GET_LEAGUES_COUNT,GET_MATCHES_COUNT,
  GET_NAVITEMS,
  CLEAR_FIX
} from './types';

let authHeader = { 'X-Auth-Token': '790dea64bd7c4a73b526d3efb4987d1f' }

export const getTablePoints = (league) =>{
  const request = axios(
    {
    method: 'get',
    url: `http://api.football-data.org/v2/competitions/${league}/standings`,
    headers: authHeader
  }).then((res) =>{
  // console.log(res.data);
    return res.data;
  }).catch((e) =>{
    console.log(e);
    return null;
  })
  
  return {
    type:GET_TABLE_POINTS,
    payload: request
  }
}

export const getFixtures = (league, season=2017) =>{
  const request = axios(
    {
    method: 'get',
    url: `http://api.football-data.org/v2/competitions/${league}/matches?season=${season}`,
    headers: authHeader
  }).then((res) =>{
  // console.log(res.data);
    return res.data;
  }).catch((e) =>{
    console.log(e);
    return null;
  })
  
  return {
    type:GET_FIXTURES,
    payload: request
  }
}

export const getTeams = (league) =>{
  const request = axios({
    method: 'get',
    url: `http://api.football-data.org/v2/competitions/${league}/teams`,
    headers: authHeader
  }).then((res) =>{
    // console.log(res.data);
    return res.data
  }).catch((e) =>{
    console.log(e);
    return e
  })
  
  return {
    type:GET_TEAMS,
    payload: request
  }
}

export const getTeamsCount = () =>{  
  return {
    type:GET_TEAMS_COUNT,
    payload: {name:"Teams", count:1000, icon:"fa fa-users"}
  }
}

export const getLeaguesCount = () =>{
  return {
    type:GET_LEAGUES_COUNT,
    payload: {name:"Leagues", count:148, icon:"fa fa-trophy"}
  }
}

export const getPlayersCount = () =>{
  return {
    type:GET_PLAYERS_COUNT,
    payload: {name:"Players", count:500, icon:"fa fa-male"}
  }
}

export const getMatchesCount = () =>{
  return {
    type:GET_MATCHES_COUNT,
    payload: {name:"Matches", count:3000, icon:"fa fa-futbol-o"}
  }
}

export const clearFix = () =>{
  return {
    type: CLEAR_FIX,
    payload: null
  }
}

export const getSlider = () =>{
  return {
    type:GET_SLIDER,
    payload: [{
      bgImg:'/assets/extra-images/banner-1.jpg',
      subTitle:'The Best Fitxtures and Match Updates In One Place',
      Title:'Welcome to BW Sports, Fixtures and More',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id justo a arcu viverra placerat in eget dolor. In hac habitasse platea dictumst. Etiam porta diam sed lacus pharetra, elementum molestie metus fermentum.',
      captionImg: '/assets/extra-images/banner-static.png'
    },{
      bgImg:'/assets/extra-images/banner-2.jpg',
        subTitle:'This Is A React-Redux Project Designed By Raymond',
      Title:'We Talk Sports, What More Do You Need',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id justo a arcu viverra placerat in eget dolor. In hac habitasse platea dictumst. Etiam porta diam sed lacus pharetra, elementum molestie metus fermentum.',
      captionImg: '/assets/extra-images/banner-static.png'
    }]
  }
}

export const getHighlightedNews = () =>{
  return {
    type:GET_HIGHLIGHTED_NEWS,
    payload : [
      {
        image:"/assets/extra-images/blog-grid-1.jpg",
        title:"United, Palace Aim To Rebound From Setbacks",
        link: "#",
        date: "11 September 2019"
      },{
        image:"/assets/extra-images/blog-grid-2.jpg",
        title:"The summer of 2019 was understandably all about the",
        link: "#",
        date: "12 October 2019"
      },{
        image:"/assets/extra-images/blog-grid-3.jpg",
        title:"Sevilla finished fifth and just out of the Champions League spots",
        link: "#",
        date: "13 November 2019"
      }
    ]
  }
}

export const getNavItems = () =>{
  return{
    type: GET_NAVITEMS,
    payload:[
          {
          class:'',
          text:'Brazil SA',
          link:'/league/BSA'
        },{
          class:'',
          text:'UEFA',
          link:'/league/CL'
        },{
          class:'',
          text:'EPL',
          link:'/league/PL'
        },{
          class:'',
          text:'French Ligue 1',
          link:'/league/FL1'
        },{
          class:'',
          text:'Primeira Liga',
          link:'/league/PPL'
        },{
          class:'',
          text:'SERIE A',
          link:'/league/SA'
        },{
          class:'last',
          text:'BUNDESLIGA',
          link:'/league/BL1'
        }
      ]
  }
}