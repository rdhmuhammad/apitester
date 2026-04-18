import {Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {store} from "@/app/store/store.ts";

const App = () => (
    <Provider store={store}>
            <TooltipProvider>
                <Sonner position="top-right" richColors/>
                <RouterProvider router={router}/>
            </TooltipProvider>
    </Provider>
);

export default App;
