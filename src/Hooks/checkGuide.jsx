import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const checkGuide = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isGuide, isPending: isGuideLoading } = useQuery({
        queryKey: [user?.email, 'isGuide'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            console.log(res.data);
            return res.data?.guide;
        }
    })
    return [isGuide, isGuideLoading]
};

export default checkGuide;