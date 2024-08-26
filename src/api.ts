import { IRegisterUserResponse, IUserDetail } from "./types";

export const baseUrl = "http://localhost:3000";

export const registerUser = async (
  user: IUserDetail
): Promise<IRegisterUserResponse | undefined> => {
  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(response);

    const status = response.status;
    const userDetail = await response.json();

    if (!response.ok) {
      return {
        status,
        data: null,
        error: userDetail.message,
      };
    }
    return {
      status,
      data: userDetail,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      data: null,
      error: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
};

export const loginUser = async (
  user: IUserDetail
): Promise<IRegisterUserResponse | null> => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const status = response.status;
    const userDetail = await response.json();

    if (!response.ok) {
      return {
        status,
        data: null,
        error: userDetail.message,
      };
    }

    return {
      status,
      data: userDetail,
    };
  } catch (err) {
    return {
      status: 500,
      data: null,
      error: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
};
