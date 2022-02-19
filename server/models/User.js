const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: { type: String, ref: "Role" },
        notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
    },
    {
        timestamps: true,
    }
)

module.exports = model("User", schema)

/*
админка:
email: admin@gmail.com
password: admin1234
*/
