import {TailSpin} from "react-loader-spinner";
import * as React from "react";

export const LoaderSpin = () => {
    return (
        <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#1976d2"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}