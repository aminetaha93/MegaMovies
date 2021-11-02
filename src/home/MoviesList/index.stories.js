import MoviesList from "./";

import { QueryClient, QueryClientProvider } from "react-query";

export default {
  component: MoviesList,

  title: "Home/MoviesList",
};

const Template = (args) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesList {...args} />;
    </QueryClientProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const IsLoading = Template.bind({});
IsLoading.args = {};

export const HasError = Template.bind({});
HasError.args = {};
