import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { ShouldRevalidateFunction, MetaFunction } from "@remix-run/react";

export const links: LinksFunction = () => [
  // your links here
];

export const meta: MetaFunction = () => [
  // your meta here
];

export const handle = () => ({
  // your handler here
});

export const headers: HeadersFunction = () => ({
  // your headers here
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

export default function RouteComponent() {
  const data = useLoaderData<typeof loader>();

  console.log(data);
  return <div />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div />;
  }
  return <div />;
}

export const shouldRevalidate: ShouldRevalidateFunction = () => {
  return true;
};
