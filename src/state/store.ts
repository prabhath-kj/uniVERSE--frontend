import { configureStore} from "@reduxjs/toolkit";
import authSlice from "./index";
import { persistStore, persistReducer, FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, FLUSH, PURGE, PAUSE, PERSIST,REHYDRATE]
      }
    });
  }
});

const persistor = persistStore(store);

export { store, persistor };
