"use client";
import MaintenanceDiv from "@/components/MaintenanceDiv";
import { Container } from "@/components/container/Container";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  const { push } = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  //   setTimeout(() => push("/"), 2000);
  return (
    <Container>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Container>
  );
};

export default Error;
