import { useParams, useLocation, useHistory } from 'react-router-dom';

export const useRouter = () => ({
    history: useHistory(),
    location: useLocation(),
    params: useParams(),
})