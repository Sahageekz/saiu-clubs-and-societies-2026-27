/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ClubsRouteImport } from './routes/clubs'
import { Route as LoginRouteImport } from './routes/login'
import { Route as ManagementLoginRouteImport } from './routes/management-login'
import { Route as ClubLoginRouteImport } from './routes/club-login'
import { Route as ClubRegisterRouteImport } from './routes/club-register'
import { Route as StudentLoginRouteImport } from './routes/student-login'
import { Route as ManagementRouteImport } from './routes/management'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const ClubsRoute = ClubsRouteImport.update({
  id: '/clubs',
  path: '/clubs',
  getParentRoute: () => rootRouteImport,
} as any)

const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)

const ManagementLoginRoute = ManagementLoginRouteImport.update({
  id: '/management-login',
  path: '/management-login',
  getParentRoute: () => rootRouteImport,
} as any)

const ClubLoginRoute = ClubLoginRouteImport.update({
  id: '/club-login',
  path: '/club-login',
  getParentRoute: () => rootRouteImport,
} as any)

const ClubRegisterRoute = ClubRegisterRouteImport.update({
  id: '/club-register',
  path: '/club-register',
  getParentRoute: () => rootRouteImport,
} as any)

const StudentLoginRoute = StudentLoginRouteImport.update({
  id: '/student-login',
  path: '/student-login',
  getParentRoute: () => rootRouteImport,
} as any)

const ManagementRoute = ManagementRouteImport.update({
  id: '/management',
  path: '/management',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/clubs': typeof ClubsRoute
  '/login': typeof LoginRoute
  '/management-login': typeof ManagementLoginRoute
  '/club-login': typeof ClubLoginRoute
  '/club-register': typeof ClubRegisterRoute
  '/student-login': typeof StudentLoginRoute
  '/management': typeof ManagementRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/clubs': typeof ClubsRoute
  '/login': typeof LoginRoute
  '/management-login': typeof ManagementLoginRoute
  '/club-login': typeof ClubLoginRoute
  '/club-register': typeof ClubRegisterRoute
  '/student-login': typeof StudentLoginRoute
  '/management': typeof ManagementRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/clubs'
    | '/login'
    | '/management-login'
    | '/club-login'
    | '/club-register'
    | '/student-login'
    | '/management'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/clubs'
    | '/login'
    | '/management-login'
    | '/club-login'
    | '/club-register'
    | '/student-login'
    | '/management'
  id:
    | '__root__'
    | '/'
    | '/clubs'
    | '/login'
    | '/management-login'
    | '/club-login'
    | '/club-register'
    | '/student-login'
    | '/management'
  fileRoutesById: FileRoutesById
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/clubs': typeof ClubsRoute
  '/login': typeof LoginRoute
  '/management-login': typeof ManagementLoginRoute
  '/club-login': typeof ClubLoginRoute
  '/club-register': typeof ClubRegisterRoute
  '/student-login': typeof StudentLoginRoute
  '/management': typeof ManagementRoute
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ClubsRoute: typeof ClubsRoute
  LoginRoute: typeof LoginRoute
  ManagementLoginRoute: typeof ManagementLoginRoute
  ClubLoginRoute: typeof ClubLoginRoute
  ClubRegisterRoute: typeof ClubRegisterRoute
  StudentLoginRoute: typeof StudentLoginRoute
  ManagementRoute: typeof ManagementRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/clubs': {
      id: '/clubs'
      path: '/clubs'
      fullPath: '/clubs'
      preLoaderRoute: typeof ClubsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/management-login': {
      id: '/management-login'
      path: '/management-login'
      fullPath: '/management-login'
      preLoaderRoute: typeof ManagementLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/club-login': {
      id: '/club-login'
      path: '/club-login'
      fullPath: '/club-login'
      preLoaderRoute: typeof ClubLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/club-register': {
      id: '/club-register'
      path: '/club-register'
      fullPath: '/club-register'
      preLoaderRoute: typeof ClubRegisterRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/student-login': {
      id: '/student-login'
      path: '/student-login'
      fullPath: '/student-login'
      preLoaderRoute: typeof StudentLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/management': {
      id: '/management'
      path: '/management'
      fullPath: '/management'
      preLoaderRoute: typeof ManagementRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ClubsRoute: ClubsRoute,
  LoginRoute: LoginRoute,
  ManagementLoginRoute: ManagementLoginRoute,
  ClubLoginRoute: ClubLoginRoute,
  ClubRegisterRoute: ClubRegisterRoute,
  StudentLoginRoute: StudentLoginRoute,
  ManagementRoute: ManagementRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'

declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
