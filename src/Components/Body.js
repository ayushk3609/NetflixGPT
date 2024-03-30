import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from "./Login"
import Browse from "./Browse"
import MovieDetails from './MovieDetails'




const Body = () => {



  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/browse",
      element: <Browse />,
      children:[
        {
          path: "/browse/:movieId",
          element: <MovieDetails />
        }
      ]
    },
    
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body