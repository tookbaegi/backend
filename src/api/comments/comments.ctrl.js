import models from '../../models';

export const create = async (req, res) => {
  const { content, userId, questId } = req.body;

  try {
    const comment = await models.Comment.create({
      content,
      userId,
      questId
    });

    res.status(200).send(comment);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await models.Comment.destroy({
      where: { id }
    });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    await models.Comment.update({ content }, { where: { id } });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const list = async (req, res) => {
  const { questId } = req.query;

  try {
    if (questId) {
      const users = (await models.Comment.findAll({ questId })).map(
        user => user.dataValues
      );
      res.status(200).send(users);
    } else {
      res.status(401).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
