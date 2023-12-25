export const getComments = async () => {
    return [
        {
            id: "1",
            body: "",
            username: "There are some gnat-like insects with soft-bodied are usually found in a light yellow or white color in our plants.They are not a type of fly, but do in fact have wings and are capable of flying.They are eating on the sap in plants or on the leaves and it causes them to turn yellow and sometimes even white.So, what should i do for this? ",

            userId: "1",
            parentId: null,
            createdAt: "2022-07-16T23:00:33.010+02:00",
        },


    ];

};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};
