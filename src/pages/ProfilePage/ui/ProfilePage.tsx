import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import DynamicModuleLoader, {
  ReducerList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const { t } = useTranslation("");
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
