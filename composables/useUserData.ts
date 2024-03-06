import type { IUser } from '@/types'
const useUserData = () => {
    const userData = useState<IUser>('user', () => ({ value: "" }))
    const setUserData = (user: IUser) => {
        userData.value = user
    }
    return {
        userData,
        setUserData
    }
}
export default useUserData