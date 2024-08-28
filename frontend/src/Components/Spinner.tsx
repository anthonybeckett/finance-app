import { ClipLoader } from "react-spinners";

interface SpinnerProps {
    isLoading?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
    isLoading = true,
}: SpinnerProps): JSX.Element => {
    return (
        <>
            <div className="w-screen flex justify-center">
                <ClipLoader
                    color="#36d7b7"
                    loading={isLoading}
                    size={35}
                    aria-label="Loading Spinner"
                />
            </div>
        </>
    );
};

export default Spinner;
