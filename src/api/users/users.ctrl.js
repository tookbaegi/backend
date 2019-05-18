import models from '../../models';

export const create = async (req, res) => {
  const { name, email, type, token } = req.body;

  try {
    const user = await models.User.create({
      name,
      email,
      type,
      token
    });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).end();
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await models.User.destroy({
      where: { id }
    });
    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await models.User.update({ name }, { where: { id } });
    res.status(200).end();
  } catch (error) {
    res.status(500).end();
  }
};

export const list = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      const users = (await models.User.findAll({})).map(
        user => user.dataValues
      );
      res.status(200).send(users);
    } else {
      const user = await models.User.findOne({ where: { id } });
      res.status(200).send(user.dataValues);
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};