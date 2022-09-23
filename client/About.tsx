import React from "react";
import { useQuery, gql } from "@apollo/client";

const SERVER_STATUS_QUERY = gql`
  query GetServerStatus {
    status
  }
`;

export default () => {
  const { loading, error, data } = useQuery(SERVER_STATUS_QUERY);

  return (
    <>
      <div>
        <h1>Hey applicant!</h1>

        <p>
          <b>👏 Congratulations you've taken the first hurdle!</b>
        </p>

        <p>
          This code challenge means you've made a good impression and got us
          curious about your code style.
        </p>

        <p>
          In this challenge we want you to demonstrate both <b>client</b>- and{" "}
          <b>server-side</b> (nodejs) skills.
        </p>

        <p>
          Please find challenge details in the <b>README.md</b> file
        </p>
      </div>

      <br/>

      <div>
        We preconfigured a basic graphql flow for you and as an example you can see the result of a simple query below
      </div>

      <br/>

      <div>
        <b>GraphQL server status: </b>
        <span>{loading ? "loading" : (error ? error.toString() : data?.status)}</span>
      </div>
    </>
  );
};
