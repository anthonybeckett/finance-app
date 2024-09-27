import { toast } from "react-toastify";

export const handleError = (err: any) => {
    if (err.isAxiosError(err)) {
        let error = err.response;

        if (Array.isArray(error?.data.errors)) {
            for (let val of error?.data.errors) {
                toast.warning(val.description);
            }
        } else if (typeof err?.data.errors === 'object') {
            for (let e in err?.data.errors) {
                toast.warning(err.data.errors[e][0]);
            }
        } else if (err?.data) {
            toast.warning(err.data);
        } else if (err?.status === 401) {
            toast.warning("Please login");
            window.history.pushState({}, "LoginPage", "/login");
        } else if (err) {
            toast.warning(err?.data);
        }
    }
}