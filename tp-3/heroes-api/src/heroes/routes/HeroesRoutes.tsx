import { Navbar } from "../../ui/components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";
import { HeroesProvider } from "../context/HeroesProvider";
import { HeroByPublisherPage } from "../pages/HeroByPublisherPage";
import { NotAuth } from "../../auth/pages/NotAuth";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <HeroesProvider>
          <Routes>
            <Route
              path="/index"
              element={<HeroByPublisherPage/>}
            />
            <Route
              path="/notauth"
              element={<NotAuth/>}
            />

            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/hero/:heroId" element={<HeroPage/>}/>


            <Route path="/" element={<Navigate to="/index"/>}/>
          </Routes>
        </HeroesProvider>
      </main>
    </>
  );
};
