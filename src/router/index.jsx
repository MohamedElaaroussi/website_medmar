import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Realisation from "../pages/Realisation";
import SommesNous from "../pages/SommesNous";
import Services from "../pages/Services";
import Layout from "../layouts/layout";
import Evenementiel from '../pages/Evenementiel';
import EventDetail from '../components/EventDetail';
import Login from '../pages/Login';
import Dashboard from '../pages/admin/Dashboard';
import RealisationListe from '../pages/admin/RealisationListe';
import RealisationAjouter from '../pages/admin/RealisationAjouter';
import SiteWebListe from '../pages/admin/SiteWebListe';
import ModifierSiteWeb from '../pages/admin/ModifierSiteWeb';
import YoutubeListe from '../pages/admin/YoutubeListe';
import ModifierVideo from '../pages/admin/ModifierVideo';
import TeamWorkListe from '../pages/admin/TeamWorkListe';
import TeameAjouter from '../pages/admin/TeameAjouter';
import ModifierTeams from '../pages/admin/ModifierTeams';
import EventListe from '../pages/admin/EventListe';
import EventAjouter from '../pages/admin/EventAjouter';
import EventModifier from '../pages/admin/EventModifier';
import ClientListe from '../pages/admin/ClientListe';
import ClientAjouter from '../pages/admin/ClientAjouter';
import HeroListe from '../pages/admin/HeroListe';
import HeroModifier from '../pages/admin/HeroModifier';

export  const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
              {
                path: '/',
                element: <Home/>
              },
              {
                path:'/contact',
                element:<Contact />
              },
              {
                path:'/realisation',
                element:<Realisation />
              },
              {
                path:'/sommes-nous',
                element:<SommesNous />
              },
              {
                path:'/services',
                element:<Services />
              },
              {
                path:'/événementiel',
                element:<Evenementiel />
              },
              {
                path:'/événementiel/detail/:id',
                element:<EventDetail />
                // element:<EventDetailV2 />
              },
              {
                path:'/admin/login-login-admin',  
                element:<Login />
              },
              {
                path:'*',
                element:<h1>Not Found</h1>
              },

        ],
        

    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/dashboard/realisation',
      element: <RealisationListe />
    },
    {
      path: '/dashboard/realisation/ajouter',
      element: <RealisationAjouter />
    },
    {
      path: '/dashboard/site-web',
      element: <SiteWebListe />
    },
    {
      path: '/dashboard/site-web/modifier/:id',
      element: <ModifierSiteWeb />
    },
    {
      path: '/dashboard/youtube',
      element: <YoutubeListe />
    },
    {
      path: '/dashboard/youtube/modifier/:id',
      element: <ModifierVideo />
    },
    {
      path: '/dashboard/teams',
      element: <TeamWorkListe />
    },
    {
      path: '/dashboard/teams/ajouter',
      element: <TeameAjouter />
    },
    {
      path: '/dashboard/teams/modifier/:id',
      element: <ModifierTeams />
    },
    {
      path: '/dashboard/events',
      element: <EventListe />
    },
    {
      path: '/dashboard/events/ajouter',
      element: <EventAjouter />
    },
    {
      path: '/dashboard/event/modifier/:id',
      element: <EventModifier />
    },
    {
      path: '/dashboard/clients',
      element: <ClientListe />
    },
    {
      path: '/dashboard/clients/ajouter',
      element: <ClientAjouter />
    },
    {
      path: '/dashboard/hero',
      element: <HeroListe />
    },
    {
      path: '/dashboard/hero/modifier/:id',
      element: <HeroModifier />
    },
]);
